# Desarrollo de Sistemas Informáticos
## Práctica 6. Clases e interfaces genéricas. Principios SOLID

### --> Introducción

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán de emplearse los principios [SOLID](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-solid.html) de diseño orientado a objetos.
Además cumplimentaremos nuestros códigos con el uso de **mocha** y **chai** y también con **coveralls**

* [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.npmjs.com/package/chai)
* [Coveralls](https://coveralls.io/)


### Ejercicio 2. Conversor

Este ejercico tiene como fin realizar un conversor de distintas magnitudes físicas, entre ellas:
* Masa
* Volumen
* Velocidad
* Fuerza
* Temperatura
* Longitud
* Tiempo

Para ellos, se ha implementado una interfaz genérica llamada `isConvertible`, este dispondrá de un tipo de dato genérico `<T>` y además que tendrá un método `conversion` que usarán cada una de las clases para realizar susrespectivas conversiones.
En todas ellas he utilizado un **enum** para definir todas las posibles unidades a convertir, además, para poder establecer casos donde se produzca un error, solo podrán hacerse cambios de las distintas unidades a la establecida como oficial por el [Sistema Internacional](https://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades)(SI).

Todas las clases empleadas, implementan a la interfaz genérica **isConvertible** y disponen de un tipo de dato **<T>** que en este caso serán un vector que contendrá en sus posiciones 0 y 2 unidades físicas y en su posición central el valor a cambiar. Es decir, si queremos pasar `5 kilómetros a metros, sería: DistanceUnits.km, 5, DistanceUnits.m` siendo este el procedimiento en cada una de ellas.

En las clases `Mass`, `Distance` y `Volumn`, he declarado la conversión de cada valor a su correspondiente en el SI de tal forma que solo será necesario realizar una simple multiplicación por un valor para obtener el cálculo.

En el resto de clases, nos aseguramos de cuáles son las unidades que queremos convertir para aplicar la fórmula correspondiente a dicho cálculo.



**Ejemplos de ejecución y pruebas distancia**

```
> exercises@1.0.0 test
> mocha

Kilometros: 15
El resultado es: 15000 metros

Grados celsius: 15
El resultado es: 288 kelvin

Minutos: 15
El resultado es: 900 segundos

Kilómetros hora: 13
El resultado es: 46.800000000000004 metros/segundo

Dinas: 30
El resultado es: 0.0003 newtons

Gramos: 97
El resultado es: 0.097 kilogramos

Kilometros cúbicos: 2
El resultado es: 2000000000 metros cúbicos



  distance class tests
    ✓ conversion('mm, 10, m') return 0.010
    ✓ conversion('km, 15, m') return 15000
Error, conversor a metros y no se especifican metros en ningún parámetro
    ✓ conversion('km, 7, dm') return Error

  temperature class tests
    ✓ conversion('celsius, 10, kelvin') return 283
    ✓ conversion('celsius, 10, fahrenheit') return 50
Error, conversor de celsius a otras unidades y no se especifican metros en ningún parámetro
    ✓ conversion('celsius, 10, fahrenheit') return Error

  time class tests
    ✓ conversion('min, 10, seg') return 600
    ✓ conversion('day, 2, seg') return 172800
Error, conversor a segundos, ninguno de los parámetros especificados son segundos
    ✓ conversion('min, 10, day') return Error

  speed class tests
    ✓ conversion('nu, 10, ms') return 19.4384
    ✓ conversion('ms, 5, pps') return 1.5239 * 10^-3
Error, la conversión solicitada no está disponible
    ✓ conversion('pps, 10, kmh') return Error

  strength class tests
    ✓ conversion('din, 50, n') return 0.0005
    ✓ conversion('p, 17, n') return 2.3503387252868797
Error, conversor de newtons a otras unidades y no se especifican newtons en ningún parámetro
    ✓ conversion('din, 30, p') return Error

  mass class tests
    ✓ conversion('g, 50, kg') return 0.05
    ✓ conversion('t, 15, kg') return 15000
Error, conversor a kilogramos y no se especifican kilogramos en ningún parámetro
    ✓ conversion('t, 1, g') return Error

  volumn class tests
    ✓ conversion('km3, 0.2, m3') return 200000000
    ✓ conversion('dm3, 1000, m3') return 1
Error, conversor a metros cúbicos y no se especifican metros cúbicos en ningún parámetro
    ✓ conversion('hm3, 100, mm3') return Error


  21 passing (22ms)
```