# Web

Just my personal web.

Current sections:

- [LinkTree](https://jevyanj.com/home)
- [My setup](https://jevyanj.com/setup)

## HOW TO

- Launch locally

    ```sh
    yarn install
    yarn start
    ```

- Uplodad to GCP

    ```sh
    yarn build
    cd build
    gsutil rm -a gs://<Bucket name>/**
    gsutil cp -r . gs://<Bucket name>/
    ```

## References

- [LinkFree](https://github.com/MichaelBarney/LinkFree)
- [How to build a Responsive 📱 React Navigation Menu with Styled-Components](https://dev.to/hyggedev/how-to-build-a-responsive-react-navigation-menu-with-styled-components-3682)
