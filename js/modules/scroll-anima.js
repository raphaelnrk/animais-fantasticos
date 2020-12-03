export default class scrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  //captura a distancia de cada item em relação ao topo do site

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
}  


//Verifica a distancia de cada objeto
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
        } else if (item.element.classList.contains('ativo')) {
          item.elementsection.classList.remove('ativo');
        }
      }
    );
  }

    init(){
      if (this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.animaScroll);
    }
    return this;
    }


    //Remove o event de scroll
    stop() {
      window.removeEventListener('scroll', this.animaScroll);
    }
}