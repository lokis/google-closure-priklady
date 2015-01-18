function malert(text, popis)
{
    var str = '';
    if (popis != null)
    {
        str += (popis + ': ')
    }
    str += text;
    document.getElementById("alerts").innerHTML += ("<li>" + str + "</li>");
}

malert('test 01');
malert('test 02', 'popisek 02');