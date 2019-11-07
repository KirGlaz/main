<template lang="pug">
  section.works
       .container.works__container          
          h2.title.works-title Блок "Работы"
          .work-content
            .work-content__title
              h3.work-content__text Редактирование работы
            .work-info
                .load
                  .load__text Перетащите изображение в область загрузки или нажмите на кнопку "загрузить" для добавления изображения
                  button.load__btn Загрузить
                .work__form
                  form.form(@submit.prevent="sendForm")                    
                      .form__row
                          label.form__block
                              div.form__block-title Название
                              input.form__imput.nameuser(type='text' name='name' v-model="work.title" placeholder="Дизайн автомобильного сайта")
                              span.error {{this.validation.firstError('work.title')}}
                          label.form__block
                              div.form__block-title Ссылка
                              input.form__imput.posts(type='text' name='name' v-model="work.link" placeholder="ivan@mail.ru")
                              .error {{this.validation.firstError('work.link')}}
                      .form__row                        
                          label.form__block.form__comments
                              div.form__block-title Описание
                              textarea.form__imput.form__imput--texteria.comments(name='comment' v-model="work.comment" placeholder="Дизайн сайта и вёрстка были разработаны для автосалона Автотрейд АГ")
                              .error {{this.validation.firstError('work.comment')}}
                      .form__row
                          label.form__block
                              div.form__block-title Добавление тега
                              input.form__imput.nameuser(type='text' name='name' v-model="work.tag" placeholder="HTML, CSS")
                              .error {{this.validation.firstError('work.tag')}}
                      .form__row.form__row-btn
                          .form__btn
                            button#order.btn-cancel Отмена                          
                            button#order.btn-save Сохранить
</template>

<script>
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
import axios from "axios";

export default {
  data: function() {
    return {
      work: {
        title: "",
        link: "",
        comment: "",
        tag: ""
      },
      works: []
    };
  },

  validators: {
    "work.title": function(value) {
      return Validator.value(value).required("Заполните название");
    },
    "work.link": function(value) {
      return Validator.value(value).required("Укажите ссылку");
    },
    "work.comment": function(value) {
      return Validator.value(value).required("Добавьте описание");
    },
    "work.tag": function(value) {
      return Validator.value(value).required("Добавьте тег");
    }
  },
  computed: {
    titleError() {
      return this.validation.firstError("work.title");
    },
    linkError() {
      return this.validation.firstError("work.link");
    },
    commentError() {
      return this.validation.firstError("work.comment");
    },
    tagError() {
      return this.validation.firstError("work.tag");
    }
  },
  methods: {
    async sendForm() {
      const success = await this.$validate();
      console.log("success", success);
      if (success) {
        console.log("Форма заполнена!");
      } else {
        console.log("Ошибка в заполнении формы!");
      }
    }
  }
};
</script>

<style lang='postcss'>
.works {
  background-image: linear-gradient(180deg, #222427, #3d3f42);
  min-height: 1169px;
}

.works__container {
  padding-top: 61px;
  display: flex;
  flex-direction: column;
}

.works-title {
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 61px;
}

.work-info {
  display: flex;
  @media screen and (max-width: 1143px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.work-content {
  width: 1080px;
  min-height: 775px;
  background-color: white;
  box-shadow: 0 10px 5px rgba(110, 110, 110, 0.3);
  @media screen and (max-width: 1143px) {
    width: 708px;
  }
  @media screen and (max-width: 748px) {
    width: 100%;
  }
}

.work-content__title {
  width: 1040px;
  margin-left: 20px;
  display: flex;
  height: 73px;
  border-bottom: 1px solid #adb0b8;
  @media screen and (max-width: 1143px) {
    width: 678px;
  }
  @media screen and (max-width: 748px) {
    width: 88%;
  }
}

.work-content__text {
  font-weight: 600;
  font-size: 18px;
  padding-top: 30px;
}

.load {
  width: 500px;
  height: 280px;
  background-color: #fcd097;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-left: 30px;
  border: 2px dotted #f59416;
  @media screen and (max-width: 748px) {
    width: 95%;
    margin-left: 0px;
  }
}

.load__text {
  width: 350px;
  text-align: center;
  margin-bottom: 30px;
  color: #f59416;
  @media screen and (max-width: 748px) {
    width: 228px;
  }
}

.load__btn {
  background-image: linear-gradient(57deg, #dc9322, #ff7708);
  width: 180px;
  height: 55px;
  border-radius: 40px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-image: linear-gradient(108deg, #dc8236, #ff8908);
  }
}
</style>

<style lang="postcss">
.form {
  padding-bottom: 20px;
}

.work__form {
  min-width: 505px;
  margin-top: 50px;
  margin-left: 20px;
  @media screen and (max-width: 748px) {
    min-width: inherit;
    width: 95%;
    margin-left: 0px;
  }
}

.form__row {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
  &-btn {
    @media screen and (max-width: 1143px) {
      align-items: center;
    }
  }
}

.form__block {
  flex: 1;
  margin-top: 15px;
  &:first-child {
    margin-top: 0px;
  }
  display: block;

  &-title {
    color: black;
    font-weight: 600;
    font-size: 16px;
  }
}

.form__comments {
  margin-bottom: 20px;
  margin-right: 0px;
}

.form__imput {
  background: none;
  border: transparent;
  border-bottom: 1px solid black;
  padding: 20px 0px;
  width: 100%;
  height: 63px;
  color: black;
  outline: none;
  background-repeat: no-repeat;
  background-position: 7px 12px;
  font-weight: 600;
  font-size: 16px;

  &:placeholder {
    color: #babdc4;
    font-weight: 600;
    font-size: 16px;
  }

  &:focus {
    border-bottom: 1px solid #3e3e59;
  }

  &--texteria {
    resize: none;
    height: 150px;
    padding: 20px 8px;
    border: 1px solid rgb(168, 165, 165);
    color: #414c63;
    font-weight: 600;
    font-size: 16px;
  }
}

.form__btn {
  display: flex;
  justify-content: flex-end;
}

.btn-save {
  background-image: linear-gradient(57deg, #dc9322, #ff7708);
  width: 180px;
  height: 55px;
  border-radius: 40px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin-left: 60px;
  &:hover {
    background-image: linear-gradient(108deg, #dc8236, #ff8908);
  }
  @media screen and (max-width: 748px) {
    margin-left: 10px;
  }
}

.btn-cancel {
  background: transparent;
  color: #d7861f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
}
</style>