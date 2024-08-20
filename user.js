class UserController{

    constructor(){

        this.form = document.querySelector('#form');
        this.formValues = {};
        this.submitForm();
    }

    

    submitForm(){

        this.form.addEventListener('submit', (event) =>{

            event.preventDefault();

            const formData = new FormData(this.form);

            formData.forEach((value, key) =>{

                this.formValues[key] = value; 

                console.log(value, key);
            })

        console.log(this.formValues);

        })

    
    }
}