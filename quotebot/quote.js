function Quote(tags, quote) {
    this.tags = tags;
    this.quote = quote;
    
    var identify = ["<1>","<2>","<3>","<4>","<5>","<6>"];
    
    this.getCount = function() {
        var out = -1;
        for (let i = 0; i < identify.length; i++) {
            for (let j = 0; j < quote.length; j++) {
                if (this.quote[j].includes(identify[i])) {
                    out = i;
                    j = quote.length;
                }
            }
        }
        return out + 1;
    }

    this.show = function(names, base) {
        var shufNames = [];
        for (let i = 0; i < names.length; i++) {
            shufNames.splice(Math.floor((shufNames.length + 1)*Math.random()), 0, names[i]);
        }

        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        function markDown(line) {
            var out = line;

            function addDetail(indicator, open, close) {
                var opcl = false;
                while (out.includes(indicator)) {
                    var loc = out.indexOf(indicator);
                    if (opcl) {
                        out = out.substring(0, loc) + close + out.substring(loc + indicator.length);
                    } else {
                        out = out.substring(0, loc) + open + out.substring(loc + indicator.length);
                    }
                    opcl = !opcl;
                }
            }

            addDetail("**", "<b>", "</b>");
            addDetail("*", "<i>", "</i>");

            return out;
        }
        for (let i = 0; i < this.quote.length; i++) {
            var elem = document.createElement("p");
            base.appendChild(elem);

            var marked = markDown(this.quote[i]);
            var out = "";
            var goon = true;
            var k = 0;
            while (goon) {
                var pk = k;
                var who = -1;
                k = marked.length;
                for (let j = 0; j < identify.length && j < names.length; j++) {
                    var temp = marked.substring(pk).indexOf(identify[j]);
                    if (temp != -1 && temp < k) {
                        who = j;
                        k = pk + temp;
                    }
                }
                if (k == marked.length) {
                    out += marked.substring(pk);
                    goon = false;
                } else {
                    out += marked.substring(pk, k);
                    out += shufNames[who];
                    k += identify[who].length;
                }
            }

            elem.innerHTML = out;
        }
    }
}