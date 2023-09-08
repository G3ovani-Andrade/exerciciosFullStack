package com.example.demo.controller;

import com.example.demo.entity.PessoaEntity;
import com.example.demo.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaService service;
    @GetMapping
    public List<PessoaEntity> buscarTodasPessoas(){
        return this.service.buscarTodasPessoas();
    }

    @PostMapping
    public PessoaEntity cadastrarPessoa(@RequestBody PessoaEntity novaPessoa){
        return this.service.cadastrarPessoa(novaPessoa);
    }
}
