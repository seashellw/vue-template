# Vue 3 + Vite

## IDE 设置

### VSCode

安装下列扩展

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 包管理器

### Pnpm

```bash
npm install -g pnpm
pnpm setup
```

按照 `pnpm setup` 的提示，在系统变量中设置 `PNPM_HOME`，并将 `%PNPM_HOME%` 添加到 `PATH` 中。重启计算机。

验证是否安装成功：

```bash
pnpm root -g
```

以上命令正确输出路径，则安装成功。
