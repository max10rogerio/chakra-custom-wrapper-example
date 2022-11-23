# **Chakra Package wrapper example**

Example of how to create a package with custom components with chakra

---

Steps:

1. Install yalc https://github.com/wclr/yalc # yalc resolve peer dependencies problems of npm/yarn link
1. Go to folder chakra-custom
1. Exec `yarn build`
1. Exec `yalc publish`
1. Go to folder test
1. Exec `yalc add chakra-custom`
1. Exec `yarn dev`
1. Create a new componente in chakra-custom/
1. Exec `yarn build` and `yarn publish --push` # this will update the package in **test** folder
