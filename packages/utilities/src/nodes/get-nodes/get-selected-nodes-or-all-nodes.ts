/**
 * Gets the selected nodes, or all the top-level nodes on the current page if
 * no nodes are selected.
 */
export function getSelectedNodesOrAllNodes(): Array<SceneNode> {
  const selectedNodes = figma.currentPage.selection
  if (selectedNodes.length > 0) {
    return selectedNodes.slice()
  }
  return figma.currentPage.children.slice()
}
