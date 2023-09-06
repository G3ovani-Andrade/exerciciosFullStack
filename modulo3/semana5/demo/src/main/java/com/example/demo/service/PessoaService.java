package com.example.demo.service;

import com.example.demo.entity.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.PessoaRepository;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository repository;
    public List<Pessoa> buscarTodasPessoas() {
        return repository.findAll();
    }

    public Pessoa cadastrarPessoa(Pessoa pessoa){
        return repository.save(pessoa);
    }
}
