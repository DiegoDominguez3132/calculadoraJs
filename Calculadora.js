class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1,num2){
        if(typeof num1!='number'||typeof num2 !='number'){
            return null
        }
        return ['El resultado es: ',num1/num2,'El residuo es: ',num1%num2];
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    potencia(num1,num2){
        return Math.pow(num1,num2); 
    }

    raiz(num1){
        return Math.sqrt(num1);
    }
    
 

}
