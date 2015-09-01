$(document).ready(function() {
  generate();

  function generate() {
    var quotes = ["Computer science is no more about computers than astronomy is about telescopes.@Edsger Dijkstra", "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on eachother, like a wall of mini stones.@Donald Knuth", "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.@Donald Knuth", "...if you aren't, at any given time, scandalized by code you wrote five or even three years ago, you're not learning anywhere near enough.@Nick Black", "C is quirky, flawed, and an enormous success.@Dennis Ritchie", "Programs must be written for people to read, and only incidentally for machines to execute.@H. Abelson and G. Sussman", "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.@C.A.R. Hoare", "If debugging is the process of removing software bugs, then programming must be the process of putting them in.@Edsger Dijkstra", "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.@Brian Kernighan", "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.@Bjarne Stroustrup", "Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?'@Steve McConnell", "To understand what recursion is, you must first understand recursion.@Unknown"];
  
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor = randomQuote.split("@");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }

$(".button").on("click", function() {
    generate();
});

});