
const btn = document.querySelectorAll(".btn span");

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function() {
		document
			.querySelector(
				"nav .dot.step_" + (parseInt(this.getAttribute("data-step")) + 1) + ""
			)
			.classList.add("done");
		turn(parseInt(this.getAttribute("data-step")));
	});
}

function turn(step) {
	if (!!document.querySelector("#step__" + (step - 1))) {
		document.querySelector("#step__" + (step - 1)).classList.add("hidden");
	}

	document.querySelector("#step__" + step).classList.add("cube__face--top");
	document.querySelector("#step__" + step).classList.remove("cube__face--front");

	step += 1;
	if (!!document.querySelector("#step__" + step)) {
		document.querySelector("#step__" + step).classList.add("cube__face--front");
		if (!!document.querySelector("#step__" + step + " input")) {
			document.querySelector("#step__" + step + " input").focus();
		}
		document
			.querySelector("#step__" + step)
			.classList.remove("cube__face--bottom");
	}

	step += 1;
	if (!!document.querySelector("#step__" + step)) {
		document.querySelector("#step__" + step).classList.add("cube__face--bottom");
	}
}

document.querySelector(".checkbox").addEventListener("click", function() {
	this.classList.toggle("checked");
	document.querySelector(".scene").classList.add("end");

    document.querySelector(".content-welcome").classList.add("show");
    document.querySelector(".welcome-form").classList.add("show");
});

const inputs = document.querySelectorAll(".cube__face input");
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("keyup", function(e) {
		if (this.getAttribute("type") == "text") {
			if (this.value.length > 3) {
				this.closest(".container")
					.querySelector(".btn")
					.classList.add("show");
				if (e.keyCode == 13) {
					this.closest(".container")
						.querySelector(".btn span")
						.click();
				}
			} else {
				this.closest(".container")
					.querySelector(".btn")
					.classList.remove("show");
			}
		}
		if (this.getAttribute("type") == "email") {
			if (this.value.length > 2 && this.value.includes("@") && this.value.includes(".")) {
				this.closest(".container")
					.querySelector(".btn")
					.classList.add("show");
				if (e.keyCode == 13) {
					this.closest(".container")
						.querySelector(".btn span")
						.click();
				}
			} else {
				this.closest(".container")
					.querySelector(".btn")
					.classList.remove("show");
			}
		}
	});
}

document.querySelector("select").addEventListener("change", function() {
	this.closest(".container")
		.querySelector(".btn")
		.classList.add("show");
});


    $('#msg').keyup(function () {
        $('#display').text($(this).val());
      });
