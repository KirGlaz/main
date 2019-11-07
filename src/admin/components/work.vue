<template lang="pug">
    section.work
        .container.work__container
            h2.title.work-title Блок "Работы"
            form.work-form(@submit.prevent="sendForm")
                .add
                    button(type="submit").add__btn +
                    h3.add__title Добавить работу
                .add-content
                    .load
                      label.load__form-avatar-upload
                        input(
                          type="file"
                          ref="file-input"
                          @change="appendFileAndRenderPhoto"
                        ).load__form-file-input
                        .load__form-pic
                          .load__form-avatar-empty(
                            :class="{filled: renderedPhoto.length}"
                            :style="{'backgroundImage' : `url(${renderedPhoto})`}"
                          )
                        button(type="button" @click="uploadFile").load__form-addphoto Добавить фото                    
                    .work__form                                      
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
                            label.form__block.form__descriptions
                                div.form__block-title Описание
                                textarea.form__imput.form__imput--texteria.descriptions(name='description' v-model="work.description" placeholder="Дизайн сайта и вёрстка были разработаны для автосалона Автотрейд АГ")
                                .error {{this.validation.firstError('work.description')}}
                        .form__row
                            label.form__block
                                div.form__block-title Добавление тега
                                input.form__imput.nameuser(type='text' name='name' v-model="work.techs" placeholder="HTML, CSS")
                                .error {{this.validation.firstError('work.techs')}}
                        .form__row.form__row-btn
                            .form__btn(v-if="editMode === true")
                                button(type="button" @click="editExistedWork")#order.btn-cancel Отмена                          
                                button(type="button" @click="editMode = false")#order.btn-save Сохранить
            .works
                .container.works-container
                    ul.works-list
                        li.works-item(v-for="work in works" :key="work.id")
                            .mywork
                              .mywork__img
                                img(:src="`https://webdev-api.loftschool.com/${work.photo}`")
                              .mywork-content
                                .mywork__title
                                    h2.mywork-title {{work.title}}
                                .mywork__text {{work.description}}
                                a.mywork__link {{work.link}}
                              .buttons(v-if="editMode === false")
                                  button(type="button" @click="editMode = true").btn.correct Править
                                  button(type="button" @click="removeExistedWork(work.id)").btn.del Удалить                   
</template>

<script>
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    workGroup: () => import("./work-group")
  },
  data: function() {
    return {
      renderedPhoto: "",
      editMode: false,
      editedWork: { ...this.work },
      work: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: "",
        max: ""        
      }      
    };
  },
  created() {
    this.fetchWorks();
  },
  validators: {
    "work.title": function(value) {
      return Validator.value(value).required("Заполните название");
    },
    "work.link": function(value) {
      return Validator.value(value).required("Укажите ссылку");
    },
    "work.description": function(value) {
      return Validator.value(value).required("Добавьте описание");
    },
    "work.techs": function(value) {
      return Validator.value(value).required("Добавьте тег");
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    titleError() {
      return this.validation.firstError("work.title");
    },
    linkError() {
      return this.validation.firstError("work.link");
    },
    descriptionError() {
      return this.validation.firstError("work.description");
    },
    techsError() {
      return this.validation.firstError("work.techs");
    }
  },
  methods: {
    uploadFile() {
      this.$refs["file-input"].click();
    },
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        console.log("Ошибка!");
      }
    },
    ...mapActions("works", ["addWork", "fetchWorks"]),
    async addNewWork() {
      console.log("1111");
      try {
        await this.addWork(this.work);
      } catch (error) {
        alert(error.message);
      }
    },
    async sendForm() {
      const success = await this.$validate();
      console.log("success", success);
      if (success) {
        this.addNewWork();
      } else {
        console.log("Ошибка в заполнении формы!");
      }
    },
    ...mapActions("works", ["removeWorks", "editWork"]),
    async removeExistedWork(payload) {
      console.log(payload);
      try {
        await this.removeWorks(payload);
      } catch (error) {}
    },
    async editExistedWork() {
      try {
        await this.editWork(this.editedWork);
        this.editMode = false;
      } catch (error) {}
    },
  }
};
</script>


<style lang='postcss'>
.load__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.load__form-avatar-empty {
  width: 500px;
  height: 250px;
  background: #fcd097;
  position: relative;

  &.filled {
    background: center center no-repeat / cover;
  }
}

.load__form-avatar-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}

.load__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.load__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.load__form-addphoto {
  background-image: linear-gradient(57deg, #dc9322, #ff7708);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  padding: 5px;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    background-image: linear-gradient(108deg, #dc8236, #ff8908);
  }

  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
</style>

<style lang='postcss'>
.work {
  height: 100%;
  min-height: 650px;
  background: url("../../images/content/autumnbg.png") center center / cover
    no-repeat;
  color: #ff7708;
}

.work__container {
  padding-top: 61px;
  display: flex;
  flex-direction: column;
}

.work-title {
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 61px;
}

.work-form {
  display: flex;
  padding-bottom: 20px;
}

.add {
  width: 340px;
  height: 550px;
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
  margin-bottom: 20px;

  @media screen and (max-width: 748px) {
    width: 100%;
    height: 110px;
    flex-direction: initial;
    margin-right: 0px;
    margin-bottom: 10px;
  }
}

.add__btn {
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

.add__title {
  width: 100px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 748px) {
    width: 168px;
  }
}

.add-content {
  display: flex;
  background-color: #222427;
  width: 1100px;
  height: 700px;
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

.form__descriptions {
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

.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
}

.works-item {
  width: 340px;
  height: 550px;
  margin-left: 30px;
  margin-bottom: 30px;
  background-color: #222427;
  color: white;
  border: none;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}

.mywork {
  background-color: #222427;
}

.buttons {
  display: flex;
  padding-left: 30px;
  margin-top: 45px;
  @media screen and (max-width: 748px) {
    margin-top: 50px;
    padding-bottom: 10px;
  }
}

.btn {
  background-color: transparent;
  color: #babdc4;
  font-weight: 600;
  font-size: 14px;
}

.correct {
  margin-right: 90px;
  &::after {
    margin-left: 10px;
    content: svg-load(
      "../../images/icons/pencil.svg" width=15px,
      height=15px,
      fill=#383bcf
    );
  }
  @media screen and (max-width: 748px) {
    margin-right: 20px;
  }
}

.del {
  &::after {
    margin-left: 10px;
    content: svg-load(
      "../../images/icons/remove.svg" width=13px,
      height=13px,
      fill=red
    );
  }
}

.mywork__img {
  margin-bottom: 35px;
}

.mywork-content {
  padding-left: 30px;
  padding-right: 30px;
  min-height: 215px;
}

.mywork-title {
  font-weight: 600;
  font-size: 16px;
  color: #414c63;
  margin-bottom: 30px;
}

.mywork__text {
  font-weight: 600;
  font-size: 14px;
  color: #babdc4;
  margin-bottom: 20px;
}

.mywork__link {
  color: #3056e8;
  font-weight: 600;
  font-size: 14px;
}

.buttons {
  display: flex;
  padding-left: 30px;
  margin-top: 45px;
  @media screen and (max-width: 748px) {
    margin-top: 50px;
    padding-bottom: 10px;
  }
}
</style>