function abbrevName(name){
    const index = name.indexOf(' ');
    const firstIn = name.charAt(0);
    const lastIn = name.charAt(index + 1);
    const letters = firstIn + '.' + lastIn;
    return letters.toUpperCase();
};

abbrevName('Stephanie Smith');