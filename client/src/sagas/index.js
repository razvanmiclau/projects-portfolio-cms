// Import saga watchers
import {
  watchGetProjects,
  watchGetProject,
  watchDeleteProject,
  watchAddProject,
  watchUpdateProject,
  watchUploadImage,
} from './projects';
import {
  watchGetSections,
  watchGetSection,
  watchDeleteSection,
  watchAddSection,
  watchUpdateSection,
  watchUploadImageSection
} from './sections';
import {
  watchLogin
} from './auth';

export default function* rootSaga () {
  yield [
    watchGetProjects(),
    watchGetProject(),
    watchDeleteProject(),
    watchAddProject(),
    watchUpdateProject(),
    watchUploadImage(),
    watchUploadImageSection(),
    watchGetSections(),
    watchGetSection(),
    watchDeleteSection(),
    watchAddSection(),
    watchUpdateSection(),
    watchLogin()
  ];
}
