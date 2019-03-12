/*
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.

For example:
nagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
*/

/*
 anagram은 '철자 순서를 바꾼 말' 입니다.
 word 'abc' 가 있다면
 'cba', 'cab' 등은 'abc'의 anagram 인거죠.
반대로 'dcb' 는 'abc'에서 'd'가 없으므로 anagram이 될수 없습니다.
그렇다면 어떻게 anagram을 체크했는지 알아보겠습니다.
*/

function anagrams(word, words) {
  let newArray = [];
  let firstword = word.split('').sort().join('');

  for(let i=0; i<words.length; i++) {
    wordtest = words[i].split('').sort().join('');

    if(wordtest==firstword) {
      newArray.push(words[i]);
    }
  }
  return newArray;
}

// 특별한 것 없이 split().sort().join() 만으로 간단한 로직이 나왔습니다.
// 파이썬이랑 비슷한 부분이네요!
