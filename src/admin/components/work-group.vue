<template lang="pug">
  .mywork
    .mywork__img {{work.photo}}
    .mywork__title
        h2.mywork-title {{work.title}}
    .mywork__text {{work.description}}
    a.mywork__link {{work.link}}
    .buttons 
        button(type="button").btn.correct Править
        button(type="button").btn.del Удалить    
</template>

<script>
export default {
  data: function() {
    return {
      renderedPhoto: "",
      work: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo:"",
        max: "",
      },      
    };
  },
}

</script>