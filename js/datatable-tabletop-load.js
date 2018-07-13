
// Formatted numbers: i.e. numbers with commas
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "formatted-num-pre": function ( a ) {
        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
        return parseFloat( a );
    },
    "formatted-num-asc": function ( a, b ) {
        return a - b;
    },
    "formatted-num-desc": function ( a, b ) {
        return b - a;
    }
});
// Currency
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "currency-pre": function ( a ) {
        a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );
        return parseFloat( a );
    },
    
    "currency-asc": function ( a, b ) {
        return a - b;
    },
    
    "currency-desc": function ( a, b ) {
        return b - a;
    }
});
// Percentages
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "percent-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( /%/, "" );
        return parseFloat( x );
    },
 
    "percent-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "percent-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});

