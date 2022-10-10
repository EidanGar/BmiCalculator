document.getElementById("bmiCalcBtn").onclick = function() {

    feet = document.getElementById("feet").value;
    inches = document.getElementById("inches").value;
    pounds = document.getElementById("weight").value;

    feet = Number(feet)
    pounds = Number(pounds)
    inches = Number(inches)

    convertedInches = (feet * 12) + inches

    result = ((pounds/convertedInches)/convertedInches) * 703

    if (result%1 !== 0) {
        result = result.toFixed(2)
    }

    document.getElementById("bmi").value = result;
}




