<template>
  <div class="field" :class="rootClasses">
    <label v-if="hasLabel" :for="labelFor" :class="customClass" class="label">
      <slot v-if="$slots.label" name="label" />
      <template v-else>{{ label }}</template>
    </label>

    <div v-if="hasInnerField" class="field-body">
      <IfyField :addons="false" :class="innerFieldClasses">
        <slot />
      </IfyField>
    </div>
    <template v-else>
      <slot />
    </template>

    <p v-if="hasMessage" class="help" :class="`is-${newType}`">
      <slot v-if="$slots.message" name="message" />
      <template v-else>
        <template v-for="(mess, i) in formattedMessage">
          {{ mess }}
          <br :key="i" v-if="i + 1 < formattedMessage.length" />
        </template>
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: "IfyField",

  provide() {
    return {
      IfyField: this,
    };
  },

  inject: {
    parent: {
      from: "IfyField",
      default: false,
    },
  }, // Usado internamente apenas quando o componente Field está dentro de outro Field

  props: {
    type: {
      type: [String, Object],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    labelFor: {
      type: String,
      default: null,
    },
    message: {
      type: [String, Array, Object],
      default: null,
    },
    grouped: {
      type: Boolean,
      default: false,
    },
    groupMultiline: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    addons: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      newType: this.type,
      newMessage: this.message,
      fieldLabelSize: null,
      isField: true, // Usado internamente pelos componentes Input e Select
    };
  },

  computed: {
    rootClasses() {
      return [
        {
          "is-expanded": this.expanded,
          "is-floating-in-label":
            this.hasLabel && this.labelPosition === "inside",
          "is-floating-label":
            this.hasLabel && this.labelPosition === "on-border",
        },
        this.numberInputClasses,
      ];
    },
    innerFieldClasses() {
      return [
        this.fieldType(),
        {
          "is-grouped-multiline": this.groupMultiline,
        },
      ];
    },
    hasInnerField() {
      return this.grouped || this.groupMultiline || this.hasAddons();
    },

    /**
     * Formatted message in case it's an array
     * (each element is separated by <br> tag)
     */
    formattedMessage() {
      if (this.parent && this.parent.hasInnerField) {
        return ""; // Message will be displayed in parent field
      }
      if (typeof this.newMessage === "string") {
        return [this.newMessage];
      }
      let messages = [];
      if (Array.isArray(this.newMessage)) {
        this.newMessage.forEach((message) => {
          if (typeof message === "string") {
            messages.push(message);
          } else {
            for (let key in message) {
              if (message[key]) {
                messages.push(key);
              }
            }
          }
        });
      } else {
        for (let key in this.newMessage) {
          if (this.newMessage[key]) {
            messages.push(key);
          }
        }
      }
      return messages.filter((m) => {
        if (m) return m;
      });
    },
    hasLabel() {
      return this.label || this.$slots.label;
    },
    hasMessage() {
      return (
        ((!this.parent || !this.parent.hasInnerField) && this.newMessage) ||
        this.$slots.message
      );
    },
    numberInputClasses() {
      if (this.$slots.default) {
        const numberinput = this.$slots.default.filter(
          (node) =>
            node.tag && node.tag.toLowerCase().indexOf("numberinput") >= 0
        )[0];
        if (numberinput) {
          const classes = ["has-numberinput"];
          const controlsPosition =
            numberinput.componentOptions.propsData.controlsPosition;
          const size = numberinput.componentOptions.propsData.size;
          if (controlsPosition) {
            classes.push(`has-numberinput-${controlsPosition}`);
          }
          if (size) {
            classes.push(`has-numberinput-${size}`);
          }
          return classes;
        }
      }
      return null;
    },
  },

  watch: {
    /**
     * Set internal type when prop change.
     */
    type(value) {
      this.newType = value;
    },

    /**
     * Set internal message when prop change.
     */
    message(value) {
      this.newMessage = value;
    },

    /**
     * Set parent message if we use Field in Field.
     */
    newMessage(value) {
      if (this.parent && this.parent.hasInnerField) {
        if (!this.parent.type) {
          this.parent.newType = this.newType;
        }
        if (!this.parent.message) {
          this.parent.newMessage = value;
        }
      }
    },
  },

  methods: {
    /**
     * Field has addons if there are more than one slot
     * (element / component) in the Field.
     * Or is grouped when prop is set.
     * Is a method to be called when component re-render.
     */
    fieldType() {
      if (this.grouped) return "is-grouped";
      if (this.hasAddons()) return "has-addons";
    },
    hasAddons() {
      let renderedNode = 0;
      if (this.$slots.default) {
        renderedNode = this.$slots.default.reduce(
          (i, node) => (node.tag ? i + 1 : i),
          0
        );
      }
      return renderedNode > 1 && this.addons;
    },
  },
};
</script>

<style lang="postcss" scoped>
.control {
  @apply relative box-border clear-both text-base;
}

.field {
  @apply mb-3 last:mb-0;

  &.has-addons {
    @apply flex justify-start;

    .control:not(:last-child) {
      margin-right: -1px;
    }

    .control.is-expanded {
      @apply flex-grow flex-shrink;
    }
  }
}

.label {
  @apply block text-gray-700 text-base font-bold mb-2 last:mb-0;
}

.help {
  @apply block text-xs mt-1;
}
.help.is-primary {
  @apply text-brand;
}
.help.is-success {
  @apply text-accent-500;
}
.help.is-warning {
  @apply text-yellow-500;
}
.help.is-danger {
  @apply text-red-600;
}
.help.is-info {
  @apply text-indigo-500;
}

.is-static {
  @apply appearance-none flex items-center justify-center align-top h-10 px-4 py-2
    bg-gray-100 border border-gray-300 rounded-xs text-gray-500 text-center whitespace-nowrap
    pointer-events-none cursor-pointer select-none;
}
</style>
