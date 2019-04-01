var hasCallback = false;

function closeManual()
{
	if (hasCallback)
		Engine.PopGuiPageCB();
	else
		Engine.PopGuiPage();
}
