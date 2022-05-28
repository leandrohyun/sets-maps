/*
Sets será usado para analisar os serviços (segurança, saúde, educação e transporte) 
entre os distritos da cidade.
Desse modo, cada serviço atua por meio de uma construção em algum ponto do distrito para
realizar os serviços prestados (ex: Delegacia, Bombeiros, Escolas, Bibliotecas e Terminais de transporte).
Logo, essas edificações serão organizadas em conjuntos em cada distrito.
Com isso, será possível fazer comparações de serviços em cada distrito da cidade para que eles possam atender
de maneira mais justa todos os pontos da cidade.
*/

class Set {
    constructor() {
      this.items = {};
    }
    add(element) {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }
      return false;
    }
    delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    }
    has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    values() {
      return Object.values(this.items);
    }
    union(otherSet) {
      const unionSet = new Set();
      this.values().forEach(value => unionSet.add(value));
      otherSet.values().forEach(value => unionSet.add(value));
      return unionSet;
    }
    intersection(otherSet) {
      const intersectionSet = new Set();
      const values = this.values();
      const otherValues = otherSet.values();
      let biggerSet = values;
      let smallerSet = otherValues;
      if (otherValues.length - values.length > 0) {
        biggerSet = otherValues;
        smallerSet = values;
      }
      smallerSet.forEach(value => {
        if (biggerSet.includes(value)) {
          intersectionSet.add(value);
        }
      });
      return intersectionSet;
    }
    difference(otherSet) {
      const differenceSet = new Set();
      this.values().forEach(value => {
        if (!otherSet.has(value)) {
          differenceSet.add(value);
        }
      });
      return differenceSet;
    }
    isSubsetOf(otherSet) {
      if (this.size() > otherSet.size()) {
        return false;
      }
      let isSubset = true;
      this.values().every(value => {
        if (!otherSet.has(value)) {
          isSubset = false;
          return false;
        }
        return true;
      });
      return isSubset;
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return Object.keys(this.items).length;
    }
    clear() {
      this.items = {};
    }
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const values = this.values();
      let objString = `${values[0]}`;
      for (let i = 1; i < values.length; i++) {
        objString = `${objString},${values[i].toString()}`;
      }
      return objString;
    }
  }


  //União

  let distritoA = new Set();
  distritoA.add("Escola");
  distritoA.add("Delegacia");
  distritoA.add("Hospital");
  distritoA.add("Estação de Ônibus");

  let distritoB = new Set();
  distritoB.add("Bombeiros");
  distritoB.add("Estação de Metrô");
  distritoB.add("Parque");

  const unionAB = distritoA.union(distritoB);

  console.log ("Distrito A", distritoA);
  console.log ("Distrito B", distritoB);
  console.log ("União:", unionAB);

//Intersection

let distritoC = new Set();
  distritoC.add("Parque");
  distritoC.add("Delegacia");
  distritoC.add("Hospital");
  distritoC.add("Estação de Ônibus");

  let distritoD = new Set();
  distritoD.add("Bombeiros");
  distritoD.add("Hospital");
  distritoD.add("Parque");

  const intersectionCD = distritoC.intersection(distritoD);
  console.log("Distrito C: ", distritoC);
  console.log("Distrito D: ", distritoD);
  console.log("Intersection: ", intersectionCD);
  
//Difference

let distritoE = new Set();
  distritoE.add("Escola");
  distritoE.add("Delegacia");
  distritoE.add("Hospital");
  distritoE.add("Estação de Ônibus");

  let distritoF = new Set();
  distritoF.add("Bombeiros");
  distritoF.add("Estação de Ônibus");
  distritoF.add("Parque");
  distritoF.add("Delegacia");


  const differenceEF = distritoE.difference(distritoF);
  
  console.log ("Distrito E", distritoE);
  console.log ("Distrito F", distritoF);
  console.log ("Difference:", differenceEF);


  //isSubsetOf
  let distritoG = new Set();
  distritoG.add("Delegacia");
  distritoG.add("Estação de Ônibus");

  let distritoH = new Set();
  distritoH.add("Bombeiros");
  distritoH.add("Estação de Ônibus");
  distritoH.add("Parque");
  distritoH.add("Delegacia");

  const isSubsetOfGH = distritoG.isSubsetOf(distritoH);
  console.log ("Distrito G", distritoG);
  console.log ("Distrito H", distritoH);
  console.log ("IsSubsetOf: ", isSubsetOfGH);