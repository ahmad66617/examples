class IndentsController extends SettingsController{
    indentList = ['margin-top', 'margin-bottom', 'margin-left', 'margin-right', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right'];

    init(){
        this.indentList.forEach(el => {
            let currInput = document.getElementById(`${this.componentName}-${el}`),
                currRangeInput = document.getElementById(`${this.componentName}-${el}-range`);
            if (currInput && currRangeInput) {
                currInput.value = currRangeInput.value = parseInt(this.getValue(el));
                currInput.oninput = () => {
                    currRangeInput.value = currInput.value;
                    this.adjustInput(el, currInput.value + 'px', 'important');
                }
                currRangeInput.oninput = () => {
                    currInput.value = currRangeInput.value;
                    this.adjustInput(el, currRangeInput.value + 'px', 'important');
                }
            }
        })
    }
}
