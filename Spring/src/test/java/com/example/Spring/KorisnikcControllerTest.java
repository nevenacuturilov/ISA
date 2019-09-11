package com.example.Spring;

import com.example.Spring.controllers.KorisnikController;
import com.example.Spring.entities.Korisnik;
import com.example.Spring.repositories.KorisnikRepository;
import javafx.print.Collation;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(value = KorisnikController.class)
public class KorisnikcControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private KorisnikRepository kr;

    Korisnik k1 = new Korisnik("a", "a", "anabelaajsov22@gmail.com", "a", "a", "a", "a", false);
    Korisnik k2 =  new Korisnik("s", "s", "s", "s", "s", "s", "s", false);

    List<Korisnik> k = new ArrayList<Korisnik>();


    @Test
    public void getKorisnici() throws Exception {

        k.add(k1);
        k.add(k2);

        Mockito.when(kr.findAll()).thenReturn(k);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/k/korisnici/").accept(
                MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        System.out.println(result.getResponse());

        String expected = "[{id: 0, username: a, password: a, email: anabelaajsov22@gmail.com, ime: a, prezime: a, grad: a, brojTelefona: a, aktivan: false}, " +
                "{id: 1, username: s, password: s, email: s, ime: s, prezime: s, grad: s, brojTelefona: s, aktivan: false}]";

        JSONAssert.assertEquals(expected, result.getResponse()
                .getContentAsString(), false);
    }

}
