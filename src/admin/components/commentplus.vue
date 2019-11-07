<template lang="pug">
    section.comment-plus
      .container.comment-plus__container 
        .comment-add 
          button.comment-add__btn +
          h3.comment-add__title Добавить работу
        .adds-comment
          .adds-comment__user
            .adds-comment__img 
              img.adds-comment__img-pic(src='../../images/content/sten.jpg')
            .adds-comment__info
              .adds-comment__name Стэн Смит
              .adds-comment__position Агент ЦРУ
          .adds-comment__content            
            .adds-comment__content-text Она была ко мне холодна, а я весь пылал... Благодаря чему в машине поддерживалась нормальная температура.           
          .buttons.buttons-comment
            button.btn.correct Править
            button.btn.del Удалить
</template>

<style lang="postcss">
.comment-plus {
  min-height: 600px;
  background-image: linear-gradient(180deg, #222427, #3d3f42);
}

.comment-plus__container {
  display: flex;
  @media screen and (max-width: 748px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.adds-comment {
  background-color: white;
}

.comment-add {
  width: 340px;
  height: 380px;
  background-image: linear-gradient(90deg, #3056e8, #4c87ee);
  color: white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 5px rgba(110, 110, 110, 0.3);
  margin-right: 30px;
  @media screen and (max-width: 748px) {
    width: 100%;
    height: 110px;
    flex-direction: initial;
    margin-right: 0px;
    margin-bottom: 10px;
  }
}

.comment-add__btn {
  width: 150px;
  height: 150px;
  border: 2px solid white;
  border-radius: 50%;
  background: transparent;
  color: white;
  font-size: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 748px) {
    width: 52px;
    height: 52px;
    font-size: 20px;
    margin-bottom: 0px;
    margin-right: 20px;
  }
}

.comment-add__title {
  width: 100px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 748px) {
    width: 168px;
  }
}

.adds-comment {
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 5px rgba(110, 110, 110, 0.3);
  @media screen and (max-width: 748px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 10px;
    height: 285px;
    justify-content: center;
    align-items: center;
  }
}

.adds-comment__user {
  padding-top: 10px;
  width: 300px;
  margin-left: 20px;
  display: flex;
  height: 73px;
  border-bottom: 2px solid #e6e9f1;
  margin-bottom: 30px;
}

.adds-comment__img-pic {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 20px;
}

.adds-comment__info {
  display: flex;
  flex-direction: column;
}

.adds-comment__name {
  font-weight: 600;
  font-size: 16px;
  color: black;
}

.adds-comment__position {
  font-weight: 600;
  font-size: 14px;
  color: #babdc4;
}

.adds-comment__content {
  padding-left: 30px;
  padding-right: 30px;
  min-height: 187px;
  @media screen and (max-width: 748px) {
    min-height: 122px;
  }
}

.adds-comment__content-title {
  font-weight: 600;
  font-size: 16px;
  color: #414c63;
  margin-bottom: 30px;
}

.adds-comment__content-text {
  font-weight: 600;
  font-size: 14px;
  color: #babdc4;
  margin-bottom: 20px;
}

.adds-comment__content-link {
  color: #3056e8;
  font-weight: 600;
  font-size: 14px;
}

.buttons-comment {
  margin-top: 10px;
}
</style>
