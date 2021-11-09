import { build } from 'electron-builder';

build({
  config: {
    productName: 'Elephicon',
    artifactName: '${productName}-${version}-${platform}-x64.${ext}',
    copyright: '© 2020 sprout2000 and other contributors.',
    files: ['dist/**/*'],
    publish: [
      {
        provider: 'github',
        releaseType: 'release',
      },
    ],
    directories: {
      buildResources: 'assets',
      output: 'release',
    },
    linux: {
      asarUnpack: ['dist/images/logo.png'],
      icon: 'assets/icon.icns',
      target: ['AppImage'],
      category: 'Development',
    },
  },
}).catch((err) => console.log(err));