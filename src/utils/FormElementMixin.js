export default {
  props: {
    size: {
      type: String,
      default: null,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: null,
    },
    // Opções nativas do HTML5 para usar a validação padrão do navegador
    autocomplete: {
      type: String,
      default: null,
    },
    maxlength: {
      type: [Number, String],
      default: null,
    },
    useHtml5Validation: {
      type: Boolean,
      default: () => true,
    },
    validationMessage: {
      type: String,
      default: null,
    },
    statusIcon: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isValid: true,
      isFocused: false,
    };
  },

  computed: {
    /**
     * Busca pelo elemento pai Field; no máximo 3 níveis de profundidade.
     */
    parentField() {
      let parent = this.$parent;

      for (let i = 0; i < 3; i++) {
        if (parent && !parent.$data.isField) {
          parent = parent.$parent;
        }
      }

      return parent;
    },

    /**
     * Retorna a prop 'type' se o elemento pai for um componente Field.
     */
    statusType() {
      const { newType } = this.parentField || {};

      if (!newType) return;

      if (typeof newType === "string") {
        return newType;
      } else {
        for (const key in newType) if (newType[key]) return key;
      }
    },

    /**
     * Retorna a prop 'message' se o elemento pai for um componente Field.
     */
    statusMessage() {
      if (!this.parentField) return;

      return this.parentField.newMessage || this.parentField.$slots.message;
    },

    computedIconSize() {
      return this.iconSize || this.size;
    },
  },

  methods: {
    /**
     * Método 'focus' que funciona dinamicamente dependendo do componente.
     */
    focus() {
      const el = this.getElement();
      if (el === undefined) return;

      this.$nextTick(() => {
        if (el) el.focus();
      });
    },

    onBlur($event) {
      this.isFocused = false;
      this.$emit("blur", $event);
      this.checkHtml5Validity();
    },

    onFocus($event) {
      this.isFocused = true;
      this.$emit("focus", $event);
      this.checkHtml5Validity();
    },

    getElement() {
      let el = this.$refs[this.$data.elementRef];
      while (el && el._isVue) {
        el = el.$refs[el.$data.elementRef];
      }
      return el;
    },

    setInvalid() {
      let type = "danger";
      let message =
        this.validationMessage || this.getElement().validationMessage;
      this.setValidity(type, message);
    },

    setValidity(type, message) {
      this.$nextTick(() => {
        if (this.parentField) {
          // Define o 'type' somente se já não foi definido
          if (!this.parentField.type) {
            this.parentField.newType = type;
          }
          // Define a 'message' somente se já não foi definida
          if (!this.parentField.message) {
            this.parentField.newMessage = message;
          }
        }
      });
    },

    /**
     * Verifica a validação do HTML5 e define a propriedade 'isValid'.
     * Se a validação falhar, define o type como 'danger' e envia a
     * mensagem de erro para o componente pai se for um Field.
     */
    checkHtml5Validity() {
      if (!this.useHtml5Validation) return;

      const el = this.getElement();
      if (el === undefined) return;

      if (!el.checkValidity()) {
        this.setInvalid();
        this.isValid = false;
      } else {
        this.setValidity(null, null);
        this.isValid = true;
      }

      return this.isValid;
    },
  },
};
