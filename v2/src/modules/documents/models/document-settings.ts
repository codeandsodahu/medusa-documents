/*
 * Copyright 2024 RSC-Labs, https://rsoftcon.com/
 *
 * MIT License
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { model } from "@medusajs/framework/utils"
import DocumentInvoice from "./document-invoice"
import DocumentPackingSlip from "./document-packing-slip"

const DocumentSettings = model.define("document_settings", {
  id: model.id().primaryKey(),
  storeAddress: model.json().nullable(),
  storeLogoSource: model.text().nullable(),
  documentInvoice: model.hasMany(() => DocumentInvoice, {
    mappedBy: 'settings'
  }),
  documentPackingSlip: model.hasMany(() => DocumentPackingSlip, {
    mappedBy: 'settings'
  })
}) 

export default DocumentSettings