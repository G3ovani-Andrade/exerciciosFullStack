package com.example.demo.service;

import com.example.demo.entity.PessoaEntity;
import com.example.demo.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository repository;

    public PessoaEntity cadastrarPessoa(PessoaEntity novaPessoa){
        return repository.save(novaPessoa);
    }

    public List<PessoaEntity> buscarTodasPessoas(){
        return repository.findAll();
    }

}
