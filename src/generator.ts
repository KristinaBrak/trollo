const uuidGeneratorCreator = function* () {
    let value = 0;

    while (true) {
        yield value;
        value = value + 1;
    }
}

const uuidGenerator = uuidGeneratorCreator();

export const uuid = () => uuidGenerator.next().value;