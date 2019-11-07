<template lang="pug">
  section.work-plus
      .container.work-plus__container 
        .add 
          button(type="submit").add__btn +
          h3.add__title Добавить работу
        .adds-work
          .adds-work__img 
            img.adds-work__img-pic(src='../../images/content/work3.jpg')   
          .adds-work__content
            h2.adds-work__content-title Сайт автомобильной компании
            .adds-work__content-text Дизайн сайта и вёрстка были разработаны для автосалона Автотрейд АГ
            a.adds-work__content-link https://loftschool.com
          .buttons 
            button.btn.correct Править
            button.btn.del Удалить
</template>

<style lang="postcss">
.work-plus {
  min-height: 600px;
  background-image: linear-gradient(180deg, #222427, #3d3f42);
}

.work-plus__container {
  display: flex;
  padding-top: 40px;
  @media screen and (max-width: 748px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 748px) {
    width: 100%;
    height: 110px;
    flex-direction: initial;
    margin-right: 0px;
    margin-bottom: 10px;
  }
}

.adds-work {
  background-color: white;
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

.adds-work {
  width: 340px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 5px rgba(110, 110, 110, 0.3);
  @media screen and (max-width: 748px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 10px;
  }
}

.adds-work__img {
  margin-bottom: 35px;
}

.adds-work__content {
  padding-left: 30px;
  padding-right: 30px;
  min-height: 215px;
}

.adds-work__content-title {
  font-weight: 600;
  font-size: 16px;
  color: #414c63;
  margin-bottom: 30px;
}

.adds-work__content-text {
  font-weight: 600;
  font-size: 14px;
  color: #babdc4;
  margin-bottom: 20px;
}

.adds-work__content-link {
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
</style>