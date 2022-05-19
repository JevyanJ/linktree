# LinkTree

Just my LinkTree web

## Uplodad to GCS

```sh
yarn build
cd build
gsutil rm -a gs://<Bucket name>/**
gsutil cp -r . gs://<Bucket name>/
```

## References

- [LinkFree](https://github.com/MichaelBarney/LinkFree)
- [How to build a Responsive 📱 React Navigation Menu with Styled-Components](https://dev.to/hyggedev/how-to-build-a-responsive-react-navigation-menu-with-styled-components-3682)
