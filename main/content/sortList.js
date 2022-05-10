const sortList = [
    new Sort("Alphabetical", function(inpa, inpb) {
        return inpa.getName() <= inpb.getName();
    }),
    new Sort("Reverse Alphabetical", function(inpa, inpb) {
        return inpa.getName() > inpb.getName();
    })
];