(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certidao-termas"],{"36eb":function(t,e,a){t.exports=a.p+"img/Termas.62f29c4f.svg"},c1bf:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"slide-fade"}},[o("div",[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[o("router-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:"/recibos"}},[o("i",{staticClass:"mdi mdi-arrow-left"}),t._v("Voltar\n        ")]),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Nome do Sócio:")]),o("multiselect",{attrs:{options:t.todos,"track-by":"id",label:"nome",searchable:!0,loading:t.multiselectLoading},on:{"search-change":t.asyncFind,input:t.update},model:{value:t.socio,callback:function(e){t.socio=e},expression:"socio"}})],1)]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"cpf"}},[t._v("CPF do Sócio")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cpf,expression:"cpf"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cpf},on:{input:function(e){e.target.composing||(t.cpf=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"number_of_contract"}},[t._v("N° do Contrato")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.numberContract,expression:"numberContract"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.numberContract},on:{input:function(e){e.target.composing||(t.numberContract=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"value"}},[t._v("Valor do Contrato")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"valueTyped"}},[t._v("Valor por Extenso")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.valueTyped,expression:"valueTyped"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.valueTyped},on:{input:function(e){e.target.composing||(t.valueTyped=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description"}},[t._v("Descrição")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"typePayment"}},[t._v("Formas de pagamento:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.typePayment,expression:"typePayment"}],staticClass:"form-control",attrs:{multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.typePayment=e.target.multiple?a:a[0]}}},t._l(t.typePayments,(function(e){return o("option",{key:e.value,domProps:{value:e.value}},[t._v("\n                  "+t._s(e.value)+"\n                ")])})),0)])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"plots"}},[t._v("Quantidade de Parcelas")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.plots,expression:"plots"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.plots},on:{input:function(e){e.target.composing||(t.plots=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"bonification"}},[t._v("bonificações:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.bonification,expression:"bonification"}],staticClass:"form-control",attrs:{multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.bonification=e.target.multiple?a:a[0]}}},t._l(t.bonifications,(function(e){return o("option",{key:e.value,domProps:{value:e.value}},[t._v("\n                  "+t._s(e.text)+"\n                ")])})),0)])])]),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"telephone"}},[t._v("Telefone")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"address"}},[t._v("Endereço")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"city"}},[t._v("Cidade")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("E-mail")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"neighborhood"}},[t._v("Bairro")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.neighborhood,expression:"neighborhood"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.neighborhood},on:{input:function(e){e.target.composing||(t.neighborhood=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"zipcode"}},[t._v("CEP")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.zipcode,expression:"zipcode"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.zipcode},on:{input:function(e){e.target.composing||(t.zipcode=e.target.value)}}})])])]),o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"operator"}},[t._v("Operador")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.operator,expression:"operator"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.operator},on:{input:function(e){e.target.composing||(t.operator=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"operator"}},[t._v("Número de diárias de hotel")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.diarias,expression:"diarias"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.diarias},on:{input:function(e){e.target.composing||(t.diarias=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"operator"}},[t._v("day user")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dayUser,expression:"dayUser"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.dayUser},on:{input:function(e){e.target.composing||(t.dayUser=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"birthDate"}},[t._v("Data de Nascimento:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.birthDate,expression:"birthDate"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.birthDate},on:{input:function(e){e.target.composing||(t.birthDate=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"cnpj"}},[t._v("CNPJ:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cnpj,expression:"cnpj"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cnpj},on:{input:function(e){e.target.composing||(t.cnpj=e.target.value)}}})])]),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"operator"}},[t._v("Data")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),o("div",{staticClass:"col"},[o("button",{directives:[{name:"print",rawName:"v-print",value:"#div-print",expression:"'#div-print'"}],staticClass:"btn btn-lg btn-success float-right"},[t._v("\n              Imprimir\n            ")])])])],1),o("div",{staticClass:"card-body"},[o("div",{attrs:{id:"div-print"}},[o("div",{staticClass:"row mt-3"},[o("div",{staticClass:"col-sm-12"},[o("img",{staticClass:"float-right",staticStyle:{width:"600px"},attrs:{src:a("36eb"),id:"logoIt",alt:"Logo Itiquira Park"}}),o("div",{staticClass:"float-right"},[o("h2",[o("u",[o("b",[t._v("CERTIDÃO NEGATIVA DE DÉBITOS")])])]),o("h5",[o("u",[o("b",[t._v("n° serie: "+t._s(t.numberSerie))])])])])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12",staticStyle:{"font-size":"26px"}},[o("p",[t._v("\n                Vimos por meio desta, informar que o (a)\n                "),o("b",[t._v("SR(a)")]),o("b",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.name?t.name:" NOME_DO_SOCIO"))]),o("b",[t._v("\n                  , Contrato Nº\n                  "+t._s(t.numberContract)+", e CPF:\n                  "+t._s(t.cpf)+"\n                ")]),t._v("\n                está quitando o valor de\n                "),o("b",{staticStyle:{"text-transform":"uppercase"}},[t._v("\n                  R$ "+t._s(t.value)+"\n                  (\n                  "+t._s(t.valueTyped?t.valueTyped:"VALOR_EXTENSO"))]),t._v("), JUNTO À ESTÂNCIA\n                "),o("b",[t._v("TERMAS SOLAR NOVO HORIZONTE")]),t._v("\n                . ("+t._s(t.description)+")\n              ")]),o("p",[o("b",[t._v("\n                  Forma de pagamento:\n                  "+t._s(t.typePayment.toString())+"\n                ")])]),o("p",[o("b",[t._v("Quantidade de Parcelas: até "+t._s(t.plots)+" vezes ")])]),t._v("\n              FORMOSA,\n              "),o("b",[t._v(t._s(t.date)+".")]),o("p",[o("b",[t._v("GANHA COMO BONIFICAÇÃO:")])]),o("p",{staticClass:"pl-4"},[o("b",[t._v("\n                  ("+t._s(t.bonification.includes(0)?" X ":"    ")+")\n                  "),o("u",[t._v("\n                    CONFECÇÃO GRATUITA DOS CARTÕES DE ACESSO DO SÓCIO E\n                    DEPENDENTES DECLARADOS DO ANO DE "+t._s(t.years)+".\n                  ")]),o("br"),t._v("("+t._s(t.bonification.includes(1)?" X ":"    ")+") "+t._s(t.diarias)+"\n                  "),o("u",[t._v("DIÁRIAS DE HOTEL PARA CASAL, RESERVA (61)39646482.")]),o("br"),t._v("("+t._s(t.bonification.includes(2)?" X ":"    ")+") "+t._s(t.dayUser)+"\n                  "),o("u",[t._v("CONVITES DAY USER.")])])])])]),o("div",{staticClass:"row mt-5"},[o("div",{staticClass:"col"},[""!=t.telephone?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("TELEFONE:")]),t._v("\n                "+t._s(t.telephone)+"\n              ")]):t._e(),""!=t.address?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("ENDEREÇO:")]),t._v("\n                "+t._s(t.address)+"\n              ")]):t._e(),""!=t.neighborhood?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("BAIRRO:")]),t._v("\n                "+t._s(t.neighborhood)+"\n              ")]):t._e(),""!=t.zipcode?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("CEP:")]),t._v("\n                "+t._s(t.zipcode)+"\n              ")]):t._e(),""!=t.email?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("EMAIL:")]),t._v("\n                "+t._s(t.email)+"\n              ")]):t._e()]),o("div",{staticClass:"col"},[""!=t.birthDate?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("Data de Nasc.:")]),t._v("\n                "+t._s(t.birthDate)+"\n              ")]):t._e(),""!=t.city?o("p",{staticStyle:{"margin-bottom":"0"}},[o("b",[t._v("CIDADE:")]),t._v("\n                "+t._s(t.city)+"\n              ")]):t._e()])]),o("div",{staticClass:"mt-5",staticStyle:{width:"100%","font-size":"14px"}},[o("div",{staticStyle:{float:"left",width:"50%"}},[o("div",{staticClass:"text-center"},[o("p",{staticStyle:{"text-align":"center"}},[t._v("\n                  __________________________________\n                ")]),o("p",{staticStyle:{"text-align":"center","text-transform":"uppercase"}},[o("b",[t._v(t._s(t.operator))])]),o("p",{staticStyle:{"text-align":"center"}},[o("b",[o("u",[t._v(" ESTÂNCIA TERMAS SOLAR NOVO HORIZONTE ")])])]),o("p",{staticStyle:{"text-align":"center"}},[o("b",[o("u",[t._v(" CNPJ: "+t._s(t.cnpj))])])])])]),o("div",{staticStyle:{float:"left",width:"50%"}},[o("div",{staticClass:"text-center"},[o("p",{staticStyle:{"text-align":"center"}},[t._v("\n                  __________________________________\n                ")]),o("p",{staticStyle:{"text-align":"center","text-transform":"uppercase"}},[o("B",[t._v(t._s(t.name))])],1),o("p",{staticStyle:{"text-align":"center"}},[o("b",[o("u",[t._v("SÓCIO TITULAR OU RESPONSÁVEL")])])]),o("p",{staticStyle:{"text-align":"center"}},[o("b",[o("u",[t._v("SOLUÇÃO ASSESSORIA ÚTIL")])])]),o("p",{staticStyle:{"text-align":"center"}},[o("b",[o("u",[t._v(" CNPJ: 15.798.326/0001-83")])])])])]),o("br",{staticStyle:{clear:"left"}})])])])])])])},s=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("1da1")),r=(a("7514"),a("ade3")),n=a("c1df"),l=a.n(n),c=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m=l()().locale("pt-br"),v={data:function(){return{description:"",name:"",birthDate:m.format("LL"),date:m.format("LL"),numberSerie:Math.random()+1,numberContract:"",cnpj:"",cpf:"",diarias:0,dayUser:10,value:0,valueTyped:"",typePayment:["Selecione a forma"],typePayments:[{value:" À vista"},{value:" Cartão"},{value:" Cheque"}],bonification:["Selecione a bonificação"],bonifications:[{text:" CONFECÇÃO GRATUITA DOS CARTÕES",value:0},{text:" DIÁRIA DE HOTEL PARA CASAL",value:1},{text:" CONVITES DAY USE",value:2}],plots:0,telephone:"",address:"",city:"",email:"",neighborhood:"",zipcode:"",operator:"",multiselectLoading:!1,todos:[],socio:{}}},methods:p(p({},Object(c["b"])("socios",["ActionBuscarSociosPaginados"])),{},{update:function(){console.log(this.socio),null!=this.socio&&(this.name=this.socio.nome,this.cpf=this.socio.cpfCnpj,this.value=this.socio.valor,this.numberContract=this.socio.titulo,this.socio.telefones.length>0&&(this.telephone="("+this.socio.telefones[0].ddd+") "+this.socio.telefones[0].valor),this.socio.telefones.length>0?this.telephone="("+this.socio.telefones[0].ddd+") "+this.socio.telefones[0].valor:this.telephone="",this.socio.enderecos.length>0?(this.address=this.socio.enderecos[0].logradouro,this.city=this.socio.enderecos[0].cidade,this.neighborhood=this.socio.enderecos[0].bairro,this.zipcode=this.socio.enderecos[0].cep):(this.address="",this.city="",this.neighborhood="",this.zipcode=""),this.socio.emails.length>0?this.email=this.socio.emails[0].valor:this.email="")},asyncFind:function(t){var e=this;this.multiselectLoading=!0,this.ActionBuscarSociosPaginados({filtro:{nome:t},pagina:1,quantidade:10,id:window.localStorage["id"]}).then((function(t){e.todos=t.results,e.socio=e.todos.find((function(t){return t.id==e.$route.params.id})),e.multiselectLoading=!1}))}}),mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.asyncFind(this.$route.params.nome);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},u=v,_=(a("f46b"),a("2877")),f=Object(_["a"])(u,o,s,!1,null,"6fb04723",null);e["default"]=f.exports},e305:function(t,e,a){},f46b:function(t,e,a){"use strict";a("e305")}}]);
//# sourceMappingURL=certidao-termas.c1c5c352.js.map