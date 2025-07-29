function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter() {
            document.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.finalResult();
                }
            })
        },

        finalResult() {
            let calcul = this.display.value;

            try {

                // avalia a expressão digitada.
                // o uso de 'eval' é apenas para fins de aprendizado em uma calculadora simples.
                // em projetos reais, não é uma prática recomendada por questões de segurança.

                const result = eval(calcul);

                if (result === undefined || result === null || isNaN(result)) {
                    alert('Conta inválida.');
                    return;
                }

                this.display.value = String(result);

            } catch (e) {
                alert('Conta inválida.');
            }
        },

        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('button-num')) {
                    this.buttonForDisplay(el.innerText);
                }

                if (el.classList.contains('button-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('button-del')) {
                    this.deleteOne();
                }

                if (el.classList.contains('button-eq')) {
                    this.finalResult();
                }
            });
        },

        buttonForDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();
