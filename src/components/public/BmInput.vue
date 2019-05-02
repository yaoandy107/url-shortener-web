<template>
  <div
    :style="{ width: width + 'px' }"
    :class="[
      'bm-input',
      {
        'bm-input-group': $slots.prepend || $slots.append,
        'bm-input-group--append': $slots.append,
        'bm-input-group--prepend': $slots.prepend
      }
    ]"
  >
    <div
      class="bm-input-group__prepend"
      v-if="$slots.prepend"
    >
      <slot name="prepend"></slot>
    </div>
    <input
      type="text"
      class="bm-input__inner"
      :placeholder="hint"
    >
    <div
      class="bm-input-group__append"
      v-if="$slots.append"
    >
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BmInput',
  props: {
    width: {
      type: String,
      default: '150'
    },
    hint: {
      type: String,
      default: '你沒給我 hint OwQ'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/bm-input.scss";
</style>
