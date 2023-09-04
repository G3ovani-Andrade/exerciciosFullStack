package exer4;

public class Moto implements Veiculo{
    @Override
    public void ligar() {
        System.out.println("Ligar Moto");
    }

    @Override
    public void desligar() {
        System.out.println("Desligar Moto");
    }

//    @Override
//    public void abrirTetoSolar() {
//         new Exception("Motos não possuem TetoSolar");
//    }
}
