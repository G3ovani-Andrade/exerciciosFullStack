package exer4;

public interface Veiculo {
    // criamos uma interface para representar os veículos com os métodos ligar, desligar e abrirTetoSolar
    // podemos notar que nem todos os carro tem a opção de teto solar o que viola o princípio da segregação de interfaces,
    // pois um carro sem teto solar seria obrigado a implementar métodos que não precisam, ou pior uma moto que também é um veículo
    // pode implementar o método gerando uma exceção;
    public void ligar();
    public void desligar();
    //para resolver o problema vamos retirar o método de abrirTetoSolar e criar uma interface com o método,
    // vai se chamar veiculoComTetoSolar
   // public void abrirTetoSolar();
}
