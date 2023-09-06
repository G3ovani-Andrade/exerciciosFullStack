package com.example.demo.contoller;

import com.example.demo.entity.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.PessoaService;

import java.util.List;

@RestController
@RequestMapping("/hello")
public class HelloController {
    @Autowired
    private PessoaService service;
    @GetMapping
    public List<Pessoa> buscarTodasPessoas(){
        return service.buscarTodasPessoas();
    }

    @PostMapping
    public Pessoa cadastrarPessoa(@RequestBody Pessoa novaPessoa){
        return this.service.cadastrarPessoa(novaPessoa);
    }
}
