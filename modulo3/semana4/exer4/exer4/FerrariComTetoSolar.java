package exer4;

//no caso se precisarmos criar um veículo com teto solar podemos implementar as duas interfaces
public class FerrariComTetoSolar implements Veiculo,VeiculoComTetoSolar{
    @Override
    public void ligar() {
        System.out.println("Ligar carro");
    }

    @Override
    public void desligar() {
        System.out.println("desligar Moto");
    }

    @Override
    public void abrirTetoSolar() {
        System.out.println("Abrir teto");
    }

}
