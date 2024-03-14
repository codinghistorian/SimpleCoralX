# Fathom Stablecoin

Simple CoralX template.

## dependencies Installation
```bash
$npm i
```
Please run above command in root dir.

## Ganache CLI

Please run ganache before deployment or test scrip runs
```bash
$ganache
```
I generally use below command, it's just a preference.
```bash
$ganache --hardfork istanbul -m "some mnemonics" --gasLimit 12000000 -e 100000000
```
## privateKey 
Create file called "privateKey" in the root directory (to run tests, copy the privateKey of the first account of ganache):

```bash
$ echo -n PRIVATE_KEY_WITHOUT_0x_PREFIX > privateKey
```
## Compilation

```bash
$ coralX compile
```

Once compilaiton completes, you will see newly created build folder, which has artifacts of smart contracts.

## Running scripts

```bash
coralX execute --path scripts/path_to_scripts_you_would_like_to_run
```

you can also add 
--network 
option

You can run deployment scripts with above commands.

## Running test scripts
```bash
$coralX test
```

or if you need to be more explicitely running the tests.

```bash
coralX test --path pathOfTestScript_having_scripts/tests_folder_as_root --network development
```

in this repo's example
```bash
coralX test --path ERC20Mintable.test.js --network development

```

## precondition for test runs

migrateAndConfigureForTests in coralX-scenarios.js has all the precondition that runs before the actual test runs.

You can also add below options
--skip_compile true
--use_snapshot true
