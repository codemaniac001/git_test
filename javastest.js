let styles=["jazz","blues","pop","indie"]
alert(styles)
styles.push("Rock-n-Roll")
alert(styles)
let t=styles.length;
styles[((t+1)/2)-1]="classics"
alert(styles)
styles.unshift("Reggae")
styles.unshift("Rap")
alert(styles)