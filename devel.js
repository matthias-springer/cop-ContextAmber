define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-context/ContextAmber-Tests',
    'amber-context/Athens-Amber',
    'amber-context/Athens-Core-Matrices',
    'amber-context/Athens-Core-Paints',
    'amber-context/Athens-Core-Paths',
    'amber-context/Athens-Core-PathsGeometry',
    'amber-context/Athens-Core',
    'amber-context/Athens-HTML-Matrices',
    'amber-context/Athens-HTML-Paints',
    'amber-context/Athens-HTML-Paths',
    'amber-context/Athens-HTML-Tutorial',
    'amber-context/Athens-HTML',
    'amber-context/Athens-Debug-Layers'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
