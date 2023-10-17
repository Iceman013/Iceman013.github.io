const sortList = [
    new Sort("Alphabetical", function(inpa, inpb) {
        return inpa.name <= inpb.name;
    }),
    new Sort("Reverse Alphabetical", function(inpa, inpb) {
        return inpa.name > inpb.name;
    })
];