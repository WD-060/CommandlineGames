//Brauche bessere Erklärung; sorgt dafür, daß ein Key von 27 einfach als Key von 1 ausgeführt wird, sprich, es "wrapped around"
//Wie die Erläuterung es nannte. Der Modulo handhabt die Reste von Divisionen, die hierbei eine Rolle spielen. Weiterhin unklar.
function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

//Brauche noch .toUpperCase

function EnactEnigma(message, key) {

  let encodedMessage = "";  //Okay, das sollte das Ergebnis ganz am Ende speichern
  //const upperCaseMessage = message.toUpperCase() //Funktioniert so nicht...

  for (let i = 0; i < message.length; i++) {

        let code = message.charCodeAt(i); //Gibt den Unicode (sprich, Buchstaben als Zahlen innerhalb eines bestimmten Systems - nachlesen)

        //Nur A-Z, Lateinisches Alphabet ohne Sonderzeichen oder -buchstaben - damit bestimmen wir, welche Teile des Unicodealphabets wir verwenden
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26); //und hierfür haben wir mod definiert;immer noch nicht ganz sicher, wie genau die Mathematik dahiner funktioniert
            code += 65;
        }

        encodedMessage += String.fromCharCode(code);
    }

    return encodedMessage;
}

console.log(EnactEnigma("WELL, HELLO THERE!", 5))
//Ergebnis: BJQQ, MJQQT YMJWJ!



