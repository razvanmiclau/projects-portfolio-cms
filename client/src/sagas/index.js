// Import saga watchers
import {
  watchGetProjects,
  watchDeleteProject,
  watchAddProject,
  watchUploadImage,
} from './projects';
import {
  watchGetSections,
  watchGetSection,
  watchDeleteSection,
  watchAddSection,
  watchUploadImageSection
} from './sections';
import {
  watchLogin
} from './auth';

export default function* rootSaga () {
  yield [
    watchGetProjects(),
    watchDeleteProject(),
    watchAddProject(),
    watchUploadImage(),
    watchUploadImageSection(),
    watchGetSections(),
    watchGetSection(),
    watchDeleteSection(),
    watchAddSection(),
    watchLogin()
  ];
}
