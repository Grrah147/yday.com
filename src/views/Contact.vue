<template>
  <div class="contact">
    <Card>
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template>
    </Card>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const { translations, language } = inject('language');
    return { translations, language };
  },
};
</script>

<style scoped></style>