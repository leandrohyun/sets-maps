/*
Maps será usado para identificar edifícios de uma determinada avenida com base em sua ordem, 
esses edifícios serão numerados de acordo com sua ordem, onde os números serão usados como 
“key” para acessar suas informações, como nome, quantidade de moradores e outros como “value”.
*/

function defaultToString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }
  class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
  }
  class Dictionary {
    constructor(toStrFn = defaultToString) {
      this.toStrFn = toStrFn;
      this.table = {};
    }
    set(key, value) {
      if (key != null && value != null) {
        const tableKey = this.toStrFn(key);
        this.table[tableKey] = new ValuePair(key, value);
        return true;
      }
      return false;
    }
    get(key) {
      const valuePair = this.table[this.toStrFn(key)];
      return valuePair == null ? undefined : valuePair.value;
    }
    hasKey(key) {
      return this.table[this.toStrFn(key)] != null;
    }
    remove(key) {
      if (this.hasKey(key)) {
        delete this.table[this.toStrFn(key)];
        return true;
      }
      return false;
    }
    values() {
      return this.keyValues().map(valuePair => valuePair.value);
    }
    keys() {
      return this.keyValues().map(valuePair => valuePair.key);
    }
    keyValues() {
      return Object.values(this.table);
    }
    forEach(callbackFn) {
      const valuePairs = this.keyValues();
      for (let i = 0; i < valuePairs.length; i++) {
        const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
        if (result === false) {
          break;
        }
      }
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return Object.keys(this.table).length;
    }
    clear() {
      this.table = {};
    }
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const valuePairs = this.keyValues();
      let objString = `${valuePairs[0].toString()}`;
      for (let i = 1; i < valuePairs.length; i++) {
        objString = `${objString},${valuePairs[i].toString()}`;
      }
      return objString;
    }
  }

  //Set

  const dictionary = new Dictionary();
  
  dictionary.set("Prédio 1", "Residencia Cooper");
  dictionary.set("Prédio 2", "Residencia Park");
  dictionary.set("Prédio 3", "Residencia Lee");
  dictionary.set("Prédio 4", "Residencia Kang");

  console.log(dictionary.keyValues());

//Remove

dictionary.remove("Prédio 2");
console.log(dictionary.keyValues());

//HasKey

console.log(dictionary.hasKey("Prédio 1"));
console.log(dictionary.hasKey("Prédio 7"));


//Get

console.log(dictionary.get('Prédio 3'));
//Keys

console.log(dictionary.keys());

// Values

console.log(dictionary.values());

// Key Values
console.log(dictionary.keyValues());

//For Each
dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});