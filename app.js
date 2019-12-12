var app = new Vue({
    el : '#app',
    data: {
        questions : database,
        modal : false,
        modalQuestion : '',
        modalAudio : '',
        currentModal : '',
        answeredModal : false,
        pointsModal : '',
        bluePoints : 0,
        redPoints : 0,
        countDown : 10,
        countDownVar : ''
    },
    methods: {
        getPos(elem){
     
            var card = document.getElementById("qDiv");
     
            var nTop = this.$refs.cardsq[elem].offsetTop;
            var nLeft = this.$refs.cardsq[elem].offsetLeft;
            var nWidth = this.$refs.cardsq[elem].offsetWidth;
            var nHeight = this.$refs.cardsq[elem].offsetHeight;
            
            card.style.position = "absolute";
            card.style.top = nTop + "px";
            card.style.left = nLeft + "px";
            card.style.width = nWidth + "px";
            card.style.height = nHeight + "px";
    
            setTimeout(function(){
                var mt = -(nTop - 400);
                var ml = -(nLeft - 429);
                card.style.marginTop = mt + "px";
                card.style.marginLeft = ml + "px";
                card.classList.add("show");
            },100);
            
        },
        resetPos(){
            var card = document.getElementById("qDiv");
            card.classList.remove("show");
            
            seetTimeout(function(){
                card.style.top = "0px";
                card.style.left = "0px";
                card.style.width = "0px";
                card.style.height = "0px";
            },100);
        },
        showModal(elem){
            var cq = this.questions[elem];
            if(!cq.answered){
                this.modal = true;
                this.modalQuestion = cq.question;
                this.modalAudio = cq.audio;
                this.currentModal = cq.id;
                this.pointsModal = cq.value;
                this.answeredModal = cq.answered;
                clearTimeout(this.countDownVar);
                this.countDown = 60;
                this.countDownTimer();
            }
        },
        hideModal(){
            this.modal = false;
        },
        point(valor){
            var points = this.pointsModal;
            if(valor == "blue"){
                this.bluePoints += points;
            }else{
                this.redPoints += points;
            }
            this.questions[this.currentModal].answered = true;
            element = document.getElementById("data" + this.currentModal);
            element.classList.add(valor);
            this.hideModal();
        },
        voltear(valor){
            if(valor){
                return 'flip-card-a'
            }else{
                return 'flip-card'
            }
        },
        countDownTimer() {
            if(this.countDown > 0) {
                this.countDownVar = setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
        }
    }

});