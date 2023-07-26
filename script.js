var ans, correct, points = 0;
var poin = document.getElementById('points')

function addPoints(){
    points++
}

function updatePoints(){
    poin.innerText = "Points: " + points
}

function rand(x){
    return Math.floor(Math.random()*x)
}

function res(x, y, op){
    if(op == '+'){
        return x + y
    }else if(op == '-'){
        return x - y
    }else if(op == '*'){
        return x * y
    }else if(op == '/'){
        return x / y
    }
}

function generate(){
    var x = Math.floor(rand(101))
    var y = Math.floor(rand(101))

    var operator = ["+", "-", "+", "-"]
    var op = operator[rand(4)]
    
    ans = res(x,y,op)

    updatePoints()

    var quest = document.getElementById("question")
    quest.innerText = `${x} ${op} ${y} = ?`

    var option = [document.getElementById("label1"), document.getElementById("label2"), document.getElementById("label3"), document.getElementById("label4")]

    correct = Math.floor(Math.random() * 4)
    for(let i = 0; i < 4; i++){
        if(i == correct){
            option[i].innerText = ans
        }else{
            var falseans;
            do{
                falseans = ans + Math.floor(Math.random() * 20) - 10
            }while(falseans == ans)
            
            option[i].innerText = falseans
        }
    }
}

function checkAns(event){
    var answer = document.getElementsByName('option')

    for(let i = 0; i < answer.length; i++){
        if(answer[i].checked){
            event.preventDefault()
            if(i == correct){
                addPoints()
                alert("Correct!\nThe answer is " + ans)
            }else{
                alert("False!\nThe answer is " + ans)
            }
            generate()
            answer[i].checked = false
            return;
        
        }
    }

    event.preventDefault()
    alert("Please choose 1 answer!")
}