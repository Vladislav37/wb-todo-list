const path = require('path');
const { exec, writeFile, readFile } = require('../../utils/fs-promises');

const PATH_TO_BUILD = path.join(process.cwd(), 'build', 'config.json');

// - build regular with cdn params
// - save cdn params
// - build without cdn params
// - merge cdn config and not cdn config
// because  builds with different public paths will have different build hashes

const buildPublicPaths = async () => {
  try {
    const configJsonAfterCdnBuild = await readFile(PATH_TO_BUILD);

    const {
      loadRef: { JS_CDN, APP_STATIC_NAMESPACE },
    } = JSON.parse(configJsonAfterCdnBuild.toString('utf8'));

    const cdnConfig = {
      loadRef: {
        JS_CDN,
        APP_STATIC_NAMESPACE,
      },
    };

    await exec(
      'npx cross-env WB_STATIC_URL="" node ./cli/_utils/ci-utils/executor.js --from-cli=true --command=module-build',
    );

    const configJsonAfterSimpleBuild = await readFile(PATH_TO_BUILD);

    const {
      loadRef: { JS },
      envs,
      routeName,
      routePath,
      version,
      i18nNamespace,
    } = JSON.parse(configJsonAfterSimpleBuild.toString('utf8'));

    const resultConfig = {
      ...cdnConfig,
      loadRef: { ...cdnConfig.loadRef, JS },
      envs,
      routeName,
      routePath,
      version,
      i18nNamespace,
    };

    await writeFile(PATH_TO_BUILD, JSON.stringify(resultConfig));
  } catch (error) {
    console.error('error in buildPublicPaths', error);
    process.exit(1);
  }
};

buildPublicPaths();
